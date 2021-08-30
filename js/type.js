new TypeIt("#typewrite", {
	speed: 90,
	waitUntilVisible: true,
	loop: true,
})
	.type("Santa Fe College's Programming & Analysis Club")
	.pause(2000)
	.delete(undefined, {
		speed: 150,
	})
	.pause(500)
	.type("Join Today!")
	.pause(2000)
	.delete(undefined, {
		speed: 150,
	})
	.go();
