import { Divider } from "semantic-ui-react";

export default function DividerHidden() {
  return (
    <div className="customPadding">
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </div>
  );
}
