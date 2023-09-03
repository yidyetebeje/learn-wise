import { NextRequest, NextResponse } from "next/server"; // To handle the request and response
import { promises as fs } from "fs"; // To save the file temporarily
import { v4 as uuidv4 } from "uuid"; // To generate a unique filename
import PDFParser from "pdf2json"; // To parse the pdf
import { File } from "buffer";
export const dynamic = "force-dynamic";
export async function POST(req: NextRequest, res: NextResponse) {
  const formData: FormData = await req.formData();
  const uploadedFile = formData.get("file");
  let fileName = "";
  let parsedText = "";
  if (!uploadedFile) {
    return NextResponse.json({ message: "No file uploaded" });
  }
  console.log("Uploaded file:", uploadedFile);

  if (uploadedFile instanceof File) {
    fileName = uuidv4();

    const tempFilePath = `/tmp/${fileName}.pdf`;

    const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());

    await fs.writeFile(tempFilePath, fileBuffer);

    parsedText = await parsePDF(tempFilePath);
    let aiResponse = await fetch("https://learnwise.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: parsedText,
      }),
    });
    let aiResponseJSON = await aiResponse.json();
   
    return NextResponse.json({ ai:aiResponseJSON, parsedText: parsedText });
  }
  return NextResponse.json({ message: "No file uploaded" });
}
function parsePDF(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new (PDFParser as any)(null, 1);

    pdfParser.on("pdfParser_dataError", (errData: any) => {
      reject(errData.parserError);
    });

    pdfParser.on("pdfParser_dataReady", () => {
      const parsedText = pdfParser.getRawTextContent();
      resolve(parsedText);
    });
    pdfParser.loadPDF(filePath);
  });
}
