import PalakModuleService from "./service"
import { Module } from '@medusajs/framework/utils'

// Export module name as a constant for easier reference
export const PALAK_MODULE = "palak"

// Re-export the service type for type safety elsewhere
export type { PalakModuleService }

// Export the module definition
const moduleDefinition = {
  service: PalakModuleService
}

export default Module(PALAK_MODULE, moduleDefinition)