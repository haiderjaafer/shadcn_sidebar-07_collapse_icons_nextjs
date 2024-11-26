import fs from 'fs/promises';
import path from 'path';

// Utility to create folders if not exists
const createFolderIfNotExists = async (folderPath: string) => {
  try {
    await fs.mkdir(folderPath, { recursive: true });
  } catch (error) {
    throw new Error(`Error creating folder: ${folderPath}`);
  }
};

// Utility to handle file upload
export const handleFileUpload = async (
  file: File,
  employeeNo: string,
  employeeHireDate: string
) => {
  const currentDate = new Date(employeeHireDate);
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const sanitizedEmployeeNo = employeeNo.replace(/[^a-zA-Z0-9]/g, "_");
  const yearFolder = path.join(process.cwd(), `public/uploads/${year}`);
  const monthFolder = path.join(yearFolder, month);
  const dayFolder = path.join(monthFolder, day);

  await createFolderIfNotExists(yearFolder);
  await createFolderIfNotExists(monthFolder);
  await createFolderIfNotExists(dayFolder);

  const originalName = file.name;
  const ext = path.extname(originalName);
  const fileName = `${sanitizedEmployeeNo}_${year}${ext}`;
  const filePath = path.join(dayFolder, fileName);

  // Write file to disk
  await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));

  return `/uploads/${year}/${month}/${day}/${fileName}`;
};