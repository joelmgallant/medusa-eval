import PalakModuleService from "./service"

// Export module name as a constant for easier reference
export const PALAK_MODULE = "palak"

// Re-export the service type for type safety elsewhere
export type { PalakModuleService }

// Export the module definition
const moduleDefinition = {
  service: PalakModuleService
}

export default moduleDefinition