"use client";

import { useEffect, useState } from "react";

export function UploadForm() {
  const [file, setFile] = useState<File>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.json());
      else {
        const data = await res.json();
      
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form>
  );
}
