import { getPoliticians } from "./Politicians/PoliticiansDataProvider.js";
import { politiciansListComponent } from "./Politicians/politiciansListComponent.js";

getPoliticians()
.then(politiciansListComponent)