import { Widget } from "innerscope";
import { app } from "../index.ts";

export default function AboutPage() {
    const page = Widget.LinearLayout(app.root);
    page.ElementAlignment = "CENTER";
    page.ParentFill = "FILLXY";
    Widget.Paragraph(`You Are On The Get Started Page`, page);
}
