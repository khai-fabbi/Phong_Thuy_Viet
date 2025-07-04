import { toast } from 'sonner'

export const useToast = () => {
  const showSuccess = (message: string) => {
    toast.success(message)
  }

  const showError = (message: string) => {
    toast.error(message)
  }

  const showInfo = (message: string) => {
    toast.info(message)
  }

  const showWarning = (message: string) => {
    toast.warning(message)
  }

  const showLoading = (message: string) => {
    return toast.loading(message)
  }

  const dismiss = (toastId: string | number) => {
    toast.dismiss(toastId)
  }

  return {
    success: showSuccess,
    error: showError,
    info: showInfo,
    warning: showWarning,
    loading: showLoading,
    dismiss
  }
} 