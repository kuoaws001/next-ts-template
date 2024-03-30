import { NextRequest, NextResponse } from "next/server";
import schema from '../schema'
import prisma from "@/prisma/client";
import { parse } from "path";
import { use } from "react";

const users = [
    {
        id: 1,
        name: 'orange'
    },
    {
        id: 2,
        name: 'chris'
    }
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!user) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {

    const body = await request.json()
    const validation = schema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!user) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(updatedUser)

    // validate the request body
    // in invalid, return 400
    // fetch the user with the given id
    // id does't exist, return 404
    // update the user
    // return the updated user
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!user) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    await prisma.user.delete({
        where: { id: user.id }
    })

    return NextResponse.json({})

    // fetch user from db
    // if not fount, return 404
    // delete the user
    // return 200
}