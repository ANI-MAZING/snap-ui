import { usePreviewStore } from "@/store/usePreviewStore";
import { Button } from "@/components/ui/button";

export const PreviewResetButton = () => {
    const styles = usePreviewStore((s) => s.styles)
    const clearPreview = usePreviewStore((s) => s.clearPreview)

    if(!styles) return null;

    return( 
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="destructive"
                onClick={clearPreview}
                className="shadow-md"
            >
                Reset Preview
            </Button>
        </div>
    )

}