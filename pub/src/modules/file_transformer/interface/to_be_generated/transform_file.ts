import * as d_xx from "astn-sealed/dist/interface/to_be_generated/deserialize_resolved_model"
import * as d_file_in_file_out from "./file_in_file_out"

export type Error =
    | ['processing', d_xx.Error]
    | ['file in file out', d_file_in_file_out.Command_Error]