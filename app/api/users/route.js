import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, password } = body;

    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
      },
    });
    return Response.json(
      {
        message: "User created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user", error);
    return Response.json({ error: "Failed to creating user" }, { status: 500 });
  }
}
