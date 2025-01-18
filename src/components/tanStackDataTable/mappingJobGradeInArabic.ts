
// export function MappingJobGradeInArabic(jobGrade: string): string {
//     const gradeMap: { [key: string]: string } = {
//       "01": "الدرجة الأولى",
//       "02": "الدرجة الثانية",
//       "03": "الدرجة الثالثة",
//       "04": "الدرجة الرابعة",
//       "05": "الدرجة الخامسة",
//       "06": "الدرجة السادسة",
//       "07": "الدرجة السابعة",
//       "08": "الدرجة الثامنة",
//       "09": "الدرجة التاسعة",
//       "10": "الدرجة العاشرة",
//     };
  
//     return gradeMap[jobGrade] || "غير محددة"; // Safely handles unmapped values
//   }


type JobGradeType = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10";

export function getJobGradeInArabic(jobGrade: JobGradeType | string): string {
  const gradeMap: Record<JobGradeType, string> = {
    "01": "الدرجة الأولى",
    "02": "الدرجة الثانية",
    "03": "الدرجة الثالثة",
    "04": "الدرجة الرابعة",
    "05": "الدرجة الخامسة",
    "06": "الدرجة السادسة",
    "07": "الدرجة السابعة",
    "08": "الدرجة الثامنة",
    "09": "الدرجة التاسعة",
    "10": "الدرجة العاشرة",
  };

  return gradeMap[jobGrade as JobGradeType] || "غير محددة";
}

  