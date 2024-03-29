import { NextRequest, NextResponse } from "next/server";

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

export function GET(request: NextRequest, { params }: { params: { id: number } }) {

    if (params.id > 10) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    return NextResponse.json(users.find(user => user.id == params.id), { status: 200 })
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {

    const body = await request.json()

    if (!body.name) {
        return NextResponse.json({ error: 'name is required' }, { status: 400 })
    }

    if (params.id > 10) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    return NextResponse.json({ id: 1, name: body.name })

    // validate the request body
    // in invalid, return 400
    // fetch the user with the given id
    // id does't exist, return 404
    // update the user
    // return the updated user
}

export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {

    if (params.id > 10) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    return NextResponse.json({})

    // fetch user from db
    // if not fount, return 404
    // delete the user
    // return 200
}