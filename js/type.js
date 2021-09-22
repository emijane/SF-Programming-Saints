new TypeIt("#typewrite", {
	speed: 90,
	waitUntilVisible: true,
	loop: true,
})
	.type("Accepting new members!")
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
