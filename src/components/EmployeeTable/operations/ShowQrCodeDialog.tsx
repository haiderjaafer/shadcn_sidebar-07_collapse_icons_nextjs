
"use client"


import React, { useEffect } from "react";
import Image from "next/image";

interface ShowQrCodeModalProps {
  open: boolean; // Modal open state
  onOpenChange: (isOpen: boolean) => void; // Function to change open state
  qrCodeUrl: string ; // URL of the QR Code image
  userName: string; // Name of the user to display
}

const ShowQrCodeModal: React.FC<ShowQrCodeModalProps> = ({
  open,
  onOpenChange,
  qrCodeUrl,
  userName,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">QR Code</h2>
          <p className="text-gray-500">
            QR Code for <strong>{userName}</strong>
          </p>
        </div>

        {/* QR Code Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={qrCodeUrl}
            alt={`${userName} QR Code`}
            width={200}
            height={200}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-center">
          <button
            onClick={() => onOpenChange(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            اغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowQrCodeModal;



















// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import Image from "next/image";

// interface ShowQrCodeDialogProps {
//   open: boolean;
//   onOpenChange: (isOpen: boolean) => void;
//   qrCodeUrl: string;
//   userName: string;
// }

// const ShowQrCodeDialog: React.FC<ShowQrCodeDialogProps> = ({
//   open,
//   onOpenChange,
//   qrCodeUrl,
//   userName,
// }) => {
//   return (
  
//      <Dialog open={open} onOpenChange={onOpenChange} >
//       <DialogContent className="sm:max-w-[425px] bg-slate-100" >
//         <DialogHeader>
//           <DialogTitle>QR Code</DialogTitle>
//           <DialogDescription>
//             QR Code for <strong>{userName}</strong>
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           {/* Display QR Code */}
//           <Image
//             src={qrCodeUrl}
//             alt={`${userName} QR Code`}
//             width={200}
//             height={200}
//             className="mx-auto"
//           />
//         </div>
//         <DialogFooter>
//           <Button className=" font-bold" variant="outline" onClick={() => onOpenChange(false)}>
//             اغلاق
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
  
//   );
// };

// export default ShowQrCodeDialog;
