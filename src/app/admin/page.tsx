"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Loader2, RefreshCw, ChevronDown, ChevronUp, Download, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type ContactRow = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guest_count: number;
  budget_range: string | null;
  details: string | null;
  created_at: string;
};

type QuickRow = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  created_at: string;
};

type Data = {
  contact: ContactRow[];
  quick: QuickRow[];
};

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"contact" | "quick">("contact");
  const [expand, setExpand] = useState<number | null>(null);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    toast.success("Logged out");
    router.push("/login");
  };

  const { data, isLoading, isError, refetch, isFetching } = useQuery<Data>({
    queryKey: ["admin-submissions"],
    queryFn: async () => {
      const res = await fetch("/api/admin/submissions");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    refetchInterval: 30_000,
  });

  const rows = tab === "contact" ? data?.contact ?? [] : data?.quick ?? [];

  const downloadPDF = () => {
    if (!rows.length) return;
    const doc = new jsPDF("landscape");
    const title = tab === "contact" ? "Contact Form Submissions" : "Quick Form Submissions";
    doc.setFontSize(16);
    doc.text(title, 14, 20);
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 28);

    if (tab === "contact") {
      autoTable(doc, {
        startY: 34,
        head: [["ID", "Name", "Email", "Phone", "Event", "Date", "Guests", "Budget", "Details", "Submitted"]],
        body: (rows as ContactRow[]).map((r) => [
          r.id, r.full_name, r.email, r.phone, r.event_type,
          new Date(r.event_date).toLocaleDateString(), r.guest_count,
          r.budget_range ?? "", r.details ?? "",
          new Date(r.created_at).toLocaleString(),
        ]),
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [153, 0, 0] },
        alternateRowStyles: { fillColor: [248, 248, 248] },
      });
    } else {
      autoTable(doc, {
        startY: 34,
        head: [["ID", "Name", "Email", "Phone", "Submitted"]],
        body: (rows as QuickRow[]).map((r) => [
          r.id, r.full_name, r.email, r.phone,
          new Date(r.created_at).toLocaleString(),
        ]),
        styles: { fontSize: 9, cellPadding: 3 },
        headStyles: { fillColor: [153, 0, 0] },
        alternateRowStyles: { fillColor: [248, 248, 248] },
      });
    }

    doc.save(`crimson-${tab}-submissions.pdf`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold">
              Admin <span className="text-primary">Dashboard</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              View all form submissions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadPDF()}
              disabled={!rows.length}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-muted disabled:opacity-40"
            >
              <Download className="h-4 w-4" />
              PDF
            </button>
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-muted"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-500 transition hover:bg-red-500/10"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          {(["contact", "quick"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              {t === "contact" ? "Contact Form" : "Quick Form"}
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                {t === "contact" ? data?.contact.length ?? 0 : data?.quick.length ?? 0}
              </span>
            </button>
          ))}
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-center">
            <p className="text-sm text-destructive">Failed to load data. Check your database connection.</p>
            <button onClick={() => refetch()} className="mt-4 text-sm text-primary hover:underline">
              Try again
            </button>
          </div>
        ) : rows.length === 0 ? (
          <div className="rounded-xl border border-border bg-muted/20 p-12 text-center">
            <p className="text-sm text-muted-foreground">No submissions yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-left">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  {tab === "contact" && (
                    <>
                      <th className="px-4 py-3 font-medium">Event</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Guests</th>
                      <th className="px-4 py-3 font-medium">Budget</th>
                      <th className="px-4 py-3 font-medium"></th>
                    </>
                  )}
                  <th className="px-4 py-3 font-medium">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row: any, i) => (
                  <Fragment key={row.id}>
                    <motion.tr
                      key={row.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-border transition-colors hover:bg-muted/20"
                    >
                      <td className="px-4 py-3 text-muted-foreground">{row.id}</td>
                      <td className="px-4 py-3 font-medium">{row.full_name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.phone}</td>
                      {tab === "contact" && (
                        <>
                          <td className="px-4 py-3">
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              {(row as ContactRow).event_type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {new Date((row as ContactRow).event_date).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-3">{(row as ContactRow).guest_count}</td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {(row as ContactRow).budget_range || "—"}
                          </td>
                          <td className="px-4 py-3">
                            {(row as ContactRow).details && (
                              <button
                                onClick={() => setExpand(expand === row.id ? null : row.id)}
                                className="flex items-center gap-1 text-xs text-primary hover:underline"
                              >
                                {expand === row.id ? "Hide" : "Details"}
                                {expand === row.id ? (
                                  <ChevronUp className="h-3 w-3" />
                                ) : (
                                  <ChevronDown className="h-3 w-3" />
                                )}
                              </button>
                            )}
                          </td>
                        </>
                      )}
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {new Date(row.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </motion.tr>
                    {tab === "contact" && expand === row.id && (row as ContactRow).details && (
                      <tr key={`${row.id}-detail`} className="border-b border-border bg-muted/10">
                        <td colSpan={10} className="px-4 py-3">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-sm text-muted-foreground"
                          >
                            <span className="font-medium text-foreground">Details:</span>{" "}
                            {(row as ContactRow).details}
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
