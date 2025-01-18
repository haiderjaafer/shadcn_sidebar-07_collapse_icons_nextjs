
export function getArabicMonthName(monthNo:string) {
    const monthsInArabic = [
      "كانون الثاني", // January
      "شباط",         // February
      "آذار",         // March
      "نيسان",        // April
      "أيار",         // May
      "حزيران",       // June
      "تموز",         // July
      "آب",           // August
      "أيلول",        // September
      "تشرين الأول",  // October
      "تشرين الثاني", // November
      "كانون الأول"   // December
    ];
  
    // Adjust for zero-based array indexing (subtract 1 from monthNo)
    const index = parseInt(monthNo, 10) - 1;
  
    // Validate index and return the appropriate month name
    return monthsInArabic[index] || "شهر غير صالح"; // Return "Invalid month" in Arabic for invalid input
  }
  