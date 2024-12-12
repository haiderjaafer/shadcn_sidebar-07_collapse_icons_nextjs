import prisma  from "@/utiles/db";

const ITEMS_PER_PAGE = 5;

export const getAllEmployees = async (query: string, currentPage: number) => {


  console.log("getAllEmployees",getAllEmployees);


  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const employees = await prisma.users.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            empNo: {
              contains: query,
              
               
            },
          },
          {
            userName: {
              contains: query,
             
            },
          },
        ],
      },
    });
    return employees;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};



