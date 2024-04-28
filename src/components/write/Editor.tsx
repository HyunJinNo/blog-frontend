"use client";

import dynamic from "next/dynamic";
import "@/styles/Editor.scss";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";

// react-quill은 서버 사이드 렌더링을 지원하지 않기 때문에
// 클라이언트 사이드에서 모듈을 불러오도록 설정한다.
// 이를 통해 "document is not found" 에러를 방지할 수 있다.
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Editor = () => {
  const [text, setText] = useState("");

  return (
    <div className="Editor">
      <input
        className="titleInput"
        type="text"
        placeholder="제목을 입력하세요"
      />
      <ReactQuill
        className="quillWrapper"
        theme="bubble"
        placeholder="내용을 작성하세요..."
        value={text}
        onChange={(e) => setText(e)}
        modules={{
          // 더 많은 옵션
          // https://quilljs.com/docs/modules/toolbar/ 참고
          toolbar: [
            [{ header: "1" }, { header: "2" }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block", "link", "image"],
          ],
        }}
      />
    </div>
  );
};

export default Editor;
