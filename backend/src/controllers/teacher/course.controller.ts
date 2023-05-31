import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

import prisma from '../../utils/prisma';
import { customAlphabet } from 'nanoid';

export async function create(req: Request, res: Response) {
	const { name, section, code, semester } = req.body;

	const enrollCode = `${customAlphabet('ABCDEFGHJKLMNPQRSTUVWXYZ2456789', 6)}`;

	const course = await prisma.courses.create({
		data: {
			name,
			section,
			courseCode: code,
			enrollCode: enrollCode,
			semester,
			Teachers: {
				connect: {
					id: res.locals.data.details.id,
				},
			},
		},
	});

	return res.status(201).json({
		message: 'Course created successfully!',
		course: course,
	});
}

export async function getCourses(req: Request, res: Response) {
	const data = res.locals.data;

	const { archive } = req.query;

	return await prisma.courses
		.findMany({
			where: {
				isArchived: archive ? true : false,

				Teachers: {
					id: data.details.id,
				},
			},
		})
		.then(courses => {
			return res.status(200).json({
				message: 'Courses fetched successfully!',
				courses,
			});
		})
		.catch(err => {
			console.log(err);

			return res.status(400).json({
				message: 'Courses could not be fetched!',
			});
		})
		.finally(async () => {
			await prisma.$disconnect();
		});
}

export async function update(req: Request, res: Response) {
	const data = res.locals.data;
	const {
		courseId,
		name,
		section,
		code,
		semester,
	}: { courseId: string; name: string; section: string; code: string; semester: 'SUMMER' | 'SPRING' | 'FALL' } = req.body;

	if (!courseId) return res.status(400).json({ message: 'Course ID is required!' });

	const newCourse: Prisma.CoursesUpdateInput = {
		name,
		section,
		courseCode: code,
		semester,
	};

	const course: Prisma.CoursesWhereInput = {
		id: courseId,
		instructor: data.details.id,
	};

	return await prisma.courses
		.updateMany({
			where: course,
			data: newCourse,
		})
		.then(course => {
			return res.status(200).json({
				message: 'Course updated successfully!',
				course,
			});
		})
		.catch(err => {
			console.log(err);

			return res.status(400).json({
				message: 'Course could not be updated!',
			});
		})
		.finally(async () => {
			await prisma.$disconnect();
		});
}

export async function setArchive(req: Request, res: Response) {
	const { archive, courseId } = req.body;

	console.log(` '${courseId}' '${archive ? 'Archive' : 'Unarchive'}' course`);

	return res.status(200).json({
		message: 'Course archived successfully!',
	});
}

export async function remove(req: Request, res: Response) {
	const { courseId } = req.body;

	console.log(`'${courseId}' is removed`);

	return res.status(200).json({
		message: 'Course removed successfully!',
	});
}
