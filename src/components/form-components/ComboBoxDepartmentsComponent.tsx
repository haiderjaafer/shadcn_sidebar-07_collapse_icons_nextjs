'use client';

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronsUpDown, Check } from 'lucide-react'; // Ensure proper imports



interface Item {
  value: string;
  label: string;
}

interface ComboBoxComponentProps {
  valueType: string | undefined;
  onChange: (selectedValue: string) => void;
  fetchUrl?: string; // Optional prop to dynamically set fetch URL
}

const ComboBoxComponentDepartment = React.forwardRef<HTMLButtonElement, ComboBoxComponentProps>(
  ({ valueType, onChange, fetchUrl }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [items, setItems] = useState<Item[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    console.log("fetchUrl",fetchUrl);

   // Fetch data from API
   useEffect(() => {
    const fetchData = async () => {
      if (!fetchUrl) return;
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();

        console.log("data",data);

        // Handle API response gracefully
        const formattedItems = data?.departments?.map((dept: { de: number; com: string }) => ({
          value: dept.de.toString(),
          label: dept.com,
        })) || [];

        setItems(formattedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log("fetchUrl",fetchUrl);

    fetchData();
  }, [fetchUrl]);


    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

      <div className="flex flex-col items-end justify-end" >

        <label className="font-extrabold text-lg mb-1">القسم</label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between font-bold"
          >
             <div className='font-bold'>
             {valueType
              ? items.find((item) => item.value === valueType)?.label
              : 'اختر القسم'}
             </div>
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
          <input

placeholder="... البحث عـن القسم "
value={searchQuery}
className="w-full p-1 text-right mr-2 text-lg font-normal text-black outline-none pr-5"
 onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)} // Intercept input changes

/>
            <CommandList>
              <CommandEmpty className="font-bold text-center p-2 text-red-700 ">لا يوجد قسم</CommandEmpty>
              <CommandGroup>
                {filteredItems.map((item) => (
               <div className='font-extrabold'>

<CommandItem
                  className="text-black font-bold "
                    key={item.value}
                    value={item.value}
                    onSelect={() => {
                      onChange(item.value === valueType ? '' : item.value);
                      setOpen(false);
                    }}
                  >
                    <div className=' m-auto hover:text-blue-500 transition-colors duration-100'>{item.label} </div>    
                    <Check
                      className={cn(
                        'm-0',
                        valueType === item.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>

               </div>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
        {/* <div>{fetchUrl}</div> */}
      </Popover>

      </div>

    );

   
  }
  
);

ComboBoxComponentDepartment.displayName = 'ComboBoxComponentDepartment';

export default ComboBoxComponentDepartment;
