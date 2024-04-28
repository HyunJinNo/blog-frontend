"use client";

import dynamic from "next/dynamic";
import "@/styles/Editor.scss";
import { ChangeEvent } from "react";
import "react-quill/dist/quill.bubble.css";

type MyProps = {
  title: string;
  body: string;
  onChangeField: (key: string, value: string) => void;
};

// react-quill은 서버 사이드 렌더링을 지원하지 않기 때문에
// 클라이언트 사이드에서 모듈을 불러오도록 설정한다.
// 이를 통해 "document is not found" 에러를 방지할 수 있다.
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Editor = ({ title, body, onChangeField }: MyProps) => {
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeField("title", e.target.value);
  };

  const onChangeBody = (value: string) => {
    onChangeField("body", value);
  };

  return (
    <div className="Editor">
      <input
        className="titleInput"
        type="text"
        placeholder="제목을 입력하세요"
        onChange={(e) => onChangeTitle(e)}
        value={title}
      />
      <ReactQuill
        className="quillWrapper"
        theme="bubble"
        placeholder="내용을 작성하세요..."
        onChange={(value) => onChangeBody(value)}
        value={body}
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
