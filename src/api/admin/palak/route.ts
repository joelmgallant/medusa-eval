import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import type { PalakModuleService } from "../../../modules/palak"

/**
 * GET /admin/palak
 * 
 * Retrieves inventory information from the Palak supplier
 */
export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const palakModuleService = req.scope.resolve("palak") as PalakModuleService
  
  try {
    const inventory = await palakModuleService.getInventory()
    
    res.status(200).json({
      inventory,
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to get Palak inventory",
      error: error.message,
    })
  }
}