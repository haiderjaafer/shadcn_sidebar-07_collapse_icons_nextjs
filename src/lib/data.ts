import prisma  from "@/utiles/db";

const ITEMS_PER_PAGE = 5;


export const getAllEmployees = async (empNo: string, currentPage: number) => {

console.log("query,,,, currentPage",  empNo, currentPage);

  console.log("getAllEmployees",getAllEmployees);


  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const queryString = String(empNo.trim());

    console.log("queryString",queryString);
    console.log("queryString typeof",typeof queryString);

    const employees = await prisma.users.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            empNo: {
              contains: queryString,
              
              //mode: "insensitive", 
               
            },
          },
          {
            userName: {
              startsWith: empNo,
            //  mode: "insensitive", 
             
            },
          },
        ],
      },
    });

    console.log("employees",employees);

    return employees;
  } catch (error) {
    throw new Error("Failed to fetch users data");
  }
};





export const getAllUsers = async () => {


  console.log("getAllUsers" ,getAllUsers);

  
    try {
  
      const employees = await prisma.users.findMany({
  
  
  
  
      });
  
      console.log("employees",employees);
  
      return employees;
    } catch (error) {
      throw new Error("Failed to fetch users data");
    }
  };
  








export const getUsersPages = async (query: string) => {
  try {
    const userCount = await prisma.users.count({
      where: {
        OR: [
          {
            userName: {
              contains: query,
              //mode: "insensitive",
            },
          },
          {
            empNo: {
              contains: query,
              //mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(userCount) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch userCount data");
  }
};



