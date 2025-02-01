import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CompanyDetailForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });

  // Auto-fetch meta description
  const fetchMetaDescription = () => {
    if (!formData.websiteUrl) return;

    // API call delay
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        description: "Dummy meta description extracted from website...",
      }));
    }, 1000);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label>Company Name</Label>
        <Input
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          placeholder="Enter company name"
        />
      </div>

      <div className="space-y-2">
        <Label>Website URL</Label>
        <div className="flex gap-2">
          <Input
            value={formData.websiteUrl}
            onChange={(e) =>
              setFormData({ ...formData, websiteUrl: e.target.value })
            }
            placeholder="https://example.com"
          />
          <Button
            onClick={fetchMetaDescription}
            className=""
            disabled={!formData.websiteUrl}
          >
            Auto-fetch Meta
          </Button>
        </div>
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label>Description</Label>
        <Input
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Company description"
        />
      </div>
    </div>
  );
};

export default CompanyDetailForm;
