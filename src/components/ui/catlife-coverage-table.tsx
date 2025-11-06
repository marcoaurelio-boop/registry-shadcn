"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export interface CoverageRow {
  service: string;
  covered: boolean;
}

export interface CatlifeCoverageTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rows?: CoverageRow[];
  columns?: string[];
}

const CatlifeCoverageTable = React.forwardRef<
  HTMLDivElement,
  CatlifeCoverageTableProps
>(({ className, rows = [], columns = [], ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-[48px] bg-catlife-primary-light p-8", className)}
      {...props}
    >
      <div className="rounded-tl-[14.159px] border-2 border-catlife-border bg-catlife-surface">
        <Table>
          {columns.length > 0 && (
            <TableHeader>
              <TableRow className="border-b border-catlife-text-secondary">
                {columns.map((column, index) => (
                  <TableHead
                    key={index}
                    className="font-roc-grotesk text-[26px] font-medium text-catlife-text-primary"
                  >
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          )}
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="border-b border-catlife-text-secondary last:border-b-0"
              >
                <TableCell className="font-roc-grotesk text-[26px] font-medium text-catlife-text-primary">
                  {row.service}
                </TableCell>
                <TableCell className="text-center">
                  {row.covered ? (
                    <div className="flex items-center justify-center">
                      <div className="flex size-9 items-center justify-center rounded-full bg-catlife-accent-success p-2">
                        <Check className="size-5 text-catlife-text-primary" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="flex size-9 items-center justify-center rounded-full bg-catlife-primary p-2">
                        <div className="size-2 rounded-full bg-catlife-text-primary" />
                      </div>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
});

CatlifeCoverageTable.displayName = "CatlifeCoverageTable";

export { CatlifeCoverageTable };

