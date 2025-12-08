import { app } from "./app";
import { connectDB } from "./config/db";
import { PORT } from "./config/env";

connectDB();

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
