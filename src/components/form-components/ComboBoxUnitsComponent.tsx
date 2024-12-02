import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; // Adjust path as needed
import { Button } from "@/components/ui/button";
import { Command, CommandList, CommandItem, CommandEmpty, CommandGroup } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust path as needed

interface Unit {
  label: string; // Name of the unit
  value: string; // ID of the unit
}

interface Props {
  valueType: string | undefined; // Selected Unit ID
  onChange: (value: string | undefined) => void; // Handle unit selection
  fetchUrl: string; // URL to fetch units
}

const ComboBoxComponentUnits: React.FC<Props> = ({ valueType, onChange, fetchUrl }) => {
  const [items, setItems] = useState<Unit[]>([]);
  const [filteredItems, setFilteredItems] = useState<Unit[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [open, setOpen] = useState(false);

  // Fetch units on component load or fetchUrl change
  useEffect(() => {
    if (!fetchUrl) return;

    const fetchUnits = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();

        if (data.units) {
          const formattedUnits = data.units.map((unit: any) => ({
            label: unit.unit, // Map unit name
            value: unit.un.toString(), // Map unit ID as string
          }));

          setItems(formattedUnits);
          setFilteredItems(formattedUnits); // Initialize filtered items
        } else {
          setItems([]);
          setFilteredItems([]);
        }
      } catch (error) {
        console.error("Error fetching units:", error);
        setItems([]);
        setFilteredItems([]);
      }
    };

    fetchUnits();
  }, [fetchUrl]);

  // Filter items based on search query
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    setFilteredItems(
      query
        ? items.filter((item) => item.label.toLowerCase().includes(query))
        : items
    );
  }, [searchQuery, items]);

  return (
    <div className="flex flex-col items-end justify-end">
      <label className="font-extrabold text-lg mb-1">الشعبة</label>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between font-bold"
        >
        <div className="font-bold">
        {valueType
            ? items.find((item) => item.value === valueType)?.label
            : "اختر الشعبة"}
        </div>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <input
            placeholder="... البحث عـن وحدة"
            value={searchQuery}
            className="w-full p-1 text-right mr-2 text-lg font-normal text-black outline-none pr-5"
            onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
          />
          <CommandList>
            <CommandEmpty>لا توجد عناصر</CommandEmpty>
            <CommandGroup>
              {filteredItems.map((item) => (

                <div className="font-extrabold">
                  
                <CommandItem
                  key={item.value}
                  onSelect={() => {
                    onChange(item.value === valueType ? undefined : item.value);
                    setOpen(false);
                  }}
                >
                  <div className="m-auto hover:text-blue-500 transition-colors duration-100">{item.label}</div>   
                  <Check
                    className={cn(
                      "m-0",
                      valueType === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
                </div>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
      {/* Optional Debug Info */}
      {/* <div className="text-sm mt-2 text-gray-500">{fetchUrl}</div> */}
    </Popover>
    </div>

  );
};

export default ComboBoxComponentUnits;
