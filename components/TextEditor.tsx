import React, { useRef, useMemo } from "react";
import "react-quill/dist/quill.snow.css"; // Estilo por defecto de Quill
import dynamic from "next/dynamic";
import { jsPDF } from "jspdf";

const TextEditor = ({ value, onChange, asesorados }: { value: any; onChange: any }) => {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);
  const editorContentRef = useRef(null);

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const generatePDF = () => {
    if (!editorContentRef.current) {
      console.error("Editor content not found");
      return;
    }
    const strippedContent = stripHtml(editorContentRef.current.innerHTML);
    const pdf = new jsPDF();
    pdf.text(strippedContent, 10, 10);
    pdf.save("document.pdf");
  };

  const handleEditorChange = (val: any) => {
    onChange(val);
  };
  console.log(value)
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleEditorChange}
      />
      <button onClick={generatePDF}>Generar PDF</button>
      <div ref={editorContentRef} dangerouslySetInnerHTML={{ __html: value }} style={{ display: 'none' }}></div>
    </div>
  );
};

export default TextEditor;
