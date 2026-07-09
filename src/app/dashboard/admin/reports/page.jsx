"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getReports,
  dismissReport,
  removeReportedRecipe,
} from "@/services/reportApi";

export default function AdminReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadReports = async () => {
    try {
      const data = await getReports();
      setReports(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load reports");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  const handleDismiss = async (id) => {
    try {
      await dismissReport(id);
      toast.success("Report dismissed");
      loadReports();
    } catch (error) {
      console.error(error);
      toast.error("Failed to dismiss report");
    }
  };

  const handleRemove = async (id) => {
    if (!window.confirm("Delete this recipe permanently?")) return;

    try {
      await removeReportedRecipe(id);
      toast.success("Recipe removed");
      loadReports();
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove recipe");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading reports...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">📋 Reports</h1>

      {reports.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg">
          <p className="text-gray-500 text-lg">No reports yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report._id}
              className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {report.recipeName || "Unknown Recipe"}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Reason:</strong> {report.reason}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Description:</strong> {report.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Reported by:</strong> {report.reporterEmail}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleDismiss(report._id)}
                    className="btn btn-sm btn-outline"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => handleRemove(report._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}