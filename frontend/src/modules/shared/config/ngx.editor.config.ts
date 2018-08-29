/*
[
    ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
    ["fontSize", "color"],
    ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
    ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
    ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
    ["link", "unlink", "image"]
]
*/

export const NgxEditorConfig = {
  spellcheck: true,
  minHeight: "150px",
  toolbar: [
    ["bold", "underline","removeFormat"],
    ["orderedList", "unorderedList",  "outdent", "indent"],
    ["undo", "redo"],
  ],
  placeholder: "What is on your mind?"
};
