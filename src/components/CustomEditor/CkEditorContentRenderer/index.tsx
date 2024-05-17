import { DomElement } from "htmlparser2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";

interface IProps {
  content: string;
}

export default function CkEditorContentRenderer(props: IProps) {
  const { content } = props;

  function transform(node: DomElement, index: number) {
    console.log("getting in the function", node);
    if (node.type === "tag") {
      switch (node.name) {
        case "p":
          return (
            <Typography paragraph>
              {node.children.map((e) => transform(e))}
            </Typography>
          );
        case "table":
          return <Table>{node.children.map((e) => transform(e))}</Table>;
        case "tbody":
          return (
            <TableBody>{node.children.map((e) => transform(e))}</TableBody>
          );
        case "tr":
          return <TableRow>{node.children.map((e) => transform(e))}</TableRow>;
        case "td":
          return (
            <TableCell>{node.children.map((e) => transform(e))}</TableCell>
          );
        default:
          break;
      }
    }
    return convertNodeToElement(node, index, transform);
  }

  return <>{ReactHtmlParser(content, { transform: transform })}</>;
}
