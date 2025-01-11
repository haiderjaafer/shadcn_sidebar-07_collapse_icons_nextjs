


export function getActiveStatusDescription(active: string): string {
    switch (active) {
      case 'A':
        return 'مستمر بالخدمة';
      case '1':
        return 'اجازة قبل الولادة';
      case '2':
        return 'اجازة بعد الولادة';
      case 'M':
        return 'امومه';
      case '3':
        return 'اجازة العده';
      case 'T':
        return 'اجازة امومه تؤام';
      case '4':
        return 'اجازة دراسية خارج العراق';
      case '5':
        return 'تنسيب ضمن نفس السنة';
      case '6':
        return 'اجازة اعتيادية اكثر من سته اشهر';
      case '7':
        return 'اجازة مرضية اكثر من سته اشهر';
      case 'H':
        return 'سحب يد';
      case 'Q':
        return 'سحب يد اكثر من ستة اشهر';
      case 'I':
        return 'اجازة اعتيادية اكثر من شهر';
      case 'J':
        return 'اجازة مرضية اكثر من شهر';
      case 'U':
        return 'اجازة دراسية داخل العراق';
      case 'V':
        return 'اجازة بدون راتب';
      case 'D':
        return 'اجازة احتياجات خاصة';
      case 'W':
        return 'منسب';
      default:
        return 'RED'; // Default case for unknown or invalid values
    }
  }
  
  
  
  
  
  
  
  
  