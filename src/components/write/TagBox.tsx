"use client";

import "@/styles/TagBox.scss";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

type MyProps = {
  tags: string[];
  onChangeTags: (nextTags: string[]) => void;
};

const TagBox = ({ tags, onChangeTags }: MyProps) => {
  const [input, setInput] = useState<string>("");
  const [localTags, setLocalTags] = useState<string[]>([]);

  const insertTag = useCallback(
    (tag: string) => {
      if (!tag) {
        return; // 공백인 경우 추가하지 않음.
      } else if (localTags.includes(tag)) {
        return; // 이미 존재하는 경우 추가하지 않음.
      } else {
        const nextTags = [...localTags, tag];
        setLocalTags(nextTags);
        onChangeTags(nextTags);
      }
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter((value) => value !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 제거한 후 등록
      setInput("");
    },
    [input, insertTag],
  );

  // tags 값이 변경되는 경우
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  // React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
  const TagItem = React.memo(
    ({ tag, onRemove }: { tag: string; onRemove: (tag: string) => void }) => (
      <div className="tag" onClick={() => onRemove(tag)}>
        #{tag}
      </div>
    ),
  );
  TagItem.displayName = "TagItem";

  // React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
  const TagList = React.memo(
    ({
      tags,
      onRemove,
    }: {
      tags: string[];
      onRemove: (tag: string) => void;
    }) => (
      <div className="tagList">
        {tags.map((tag) => (
          <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
      </div>
    ),
  );
  TagList.displayName = "TagList";

  return (
    <div className="TagBox">
      <h4>태그</h4>
      <form className="tagForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
      <TagList tags={localTags} onRemove={onRemove} />
    </div>
  );
};

export default TagBox;
