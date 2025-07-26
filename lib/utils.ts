import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const goToTop = () => window.scrollTo(0, 0)
export function isEmpty(obj: Array<any> | object): boolean {
  if (!obj || typeof obj !== "object") return !obj

  if (Array.isArray(obj)) {
    return !obj.length
  }

  return !Object.keys(obj).length
}
export function removeUndefinedAndNull(obj: Object) {
  const result: Record<string, any> = {}

  for (const key in obj) {
    if (
      obj[key as keyof Object] !== undefined &&
      obj[key as keyof Object] !== null
    ) {
      result[key as any] = obj[key as keyof Object]
    }
  }

  return result
}

export function handleApiError(error: Error): void {
  try {
    let errorData

    try {
      errorData = JSON.parse(error.message)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (parseError) {
      return
    }

    if (
      typeof errorData === "object" &&
      errorData !== null &&
      "fieldErrors" in errorData
    ) {
      const fieldErrors = errorData.fieldErrors as Record<string, string[]>

      Object.keys(fieldErrors).forEach(fieldName => {
        const validationMessages = fieldErrors[fieldName]

        if (validationMessages.length > 0) {
          // console.log(
          //   `Validation error for ${fieldName}:`,
          //   firstValidationMessage
          // );
        }
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    // console.log("Original error message:", error);
  }
}
