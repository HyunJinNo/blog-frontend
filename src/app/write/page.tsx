import Responsive from "@/components/common/Responsive";
import TagBox from "@/components/write/TagBox";
import WriteActionButtons from "@/components/write/WriteActionButtons";
import EditorContainer from "@/containers/write/EditorContainer";

export default function WritePage() {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
}
