import { useState } from "react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

// Dummy data for scraping status
const dummyPages = [
  {
    url: "https://example.com/about",
    status: "scraped",
    chunks: ["About Us content chunk 1", "Team section chunk 2"],
  },
  {
    url: "https://example.com/products",
    status: "pending",
    chunks: [],
  },
  {
    url: "https://example.com/contact",
    status: "detected",
    chunks: [],
  },
];

const WebsiteScraping = () => {
  const [scrapingStatus, setScrapingStatus] = useState(dummyPages);
  const [selectedPage, setSelectedPage] = useState(null);
  return (
    <div className="border-t pt-4">
      <h3 className="text-lg font-semibold mb-4">Website Scraping Progress</h3>
      <div className="space-y-2">
        {scrapingStatus.map((page, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg hover:bg-gray-900 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => setSelectedPage(page)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm">{page.url}</span>
                <Badge
                  variant={
                    page.status === "scraped"
                      ? "success"
                      : page.status === "pending"
                      ? "warning"
                      : "default"
                  }
                >
                  {page.status}
                </Badge>
              </div>
              <span className="text-sm hover:bg-gray-900 dark:hover:bg-gray-800">
                {page.chunks.length} chunks
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Data Chunks Modal */}
      {selectedPage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-gray-50">{selectedPage.url}</CardTitle>
              <CardDescription className="text-gray-50">
                Scraped Content Chunks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[60vh] overflow-auto ">
              {selectedPage.chunks.length > 0 ? (
                selectedPage.chunks.map((chunk, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg text-gray-50 hover:bg-gray-900 dark:hover:bg-gray-800"
                  >
                    {chunk}
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-50 dark:text-gray-400">
                  No content chunks available yet
                </div>
              )}
            </CardContent>
            <CardContent className="flex justify-end">
              <Button variant="outline" onClick={() => setSelectedPage(null)}>
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WebsiteScraping;
