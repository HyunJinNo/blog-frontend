import Responsive from "@/components/common/Responsive";
import Editor from "@/components/write/Editor";
import TagBox from "@/components/write/TagBox";

export default function WritePage() {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
}
