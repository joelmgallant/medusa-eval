import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import type { PalakModuleService } from "../../../../modules/palak"

/**
 * GET /admin/palak/[sku]
 * 
 * Retrieves inventory information for a specific SKU from Palak
 */
export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const { sku } = req.params
  const palakModuleService = req.scope.resolve("palak") as PalakModuleService
  
  try {
    // Use the public method to get stock quantity
    const availabilityInfo = await palakModuleService.checkAvailability(sku, 0)
    
    if (availabilityInfo.availableQuantity === 0 && !availabilityInfo.allowBackorder) {
      return res.status(404).json({
        message: `No inventory item found for SKU: ${sku}`,
      })
    }
    
    res.status(200).json({
      item: {
        sku,
        quantity: availabilityInfo.availableQuantity,
        allow_backorder: availabilityInfo.allowBackorder,
        is_available: availabilityInfo.isAvailable
      }
    })
  } catch (error) {
    res.status(500).json({
      message: `Failed to get Palak inventory for SKU: ${sku}`,
      error: error.message,
    })
  }
}