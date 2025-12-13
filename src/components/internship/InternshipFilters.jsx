import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InternshipFilters = ({ filters, onFilterChange, uniqueLocations, uniqueDomains }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-8 p-6 bg-card rounded-xl shadow-lg border border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <Label htmlFor="search-internship">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search-internship"
              name="searchTerm"
              type="text"
              placeholder="Company, role, keyword..."
              value={filters.searchTerm}
              onChange={handleInputChange}
              className="pl-10"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="filter-location">Location</Label>
          <select
            id="filter-location"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
        <div>
          <Label htmlFor="filter-domain">Industry/Domain</Label>
          <select
            id="filter-domain"
            name="domain"
            value={filters.domain}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Domains</option>
            {uniqueDomains.map(dom => <option key={dom} value={dom}>{dom}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InternshipFilters;