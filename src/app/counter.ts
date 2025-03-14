"use server";
import { headers } from "next/headers";

// 使用 fetch 調用 Netlify Function
export async function incrementAndLog() {
  try {
    const headersList = headers();
    const response = await fetch("/.netlify/functions/increment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ip: headersList.get("x-forwarded-for") || "unknown",
        path: headersList.get("x-forwarded-host") || "/",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to increment counter");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in incrementAndLog:", error);
    return {
      count: 0,
      recentAccess: [],
    };
  }
}

export async function getStats() {
  try {
    const response = await fetch("/.netlify/functions/stats");
    if (!response.ok) {
      throw new Error("Failed to get stats");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getStats:", error);
    return {
      count: 0,
      recentAccess: [],
    };
  }
}
