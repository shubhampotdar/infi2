/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('.carousel').carousel()
	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
	$(this).closest('.collapse').collapse('toggle');
});

function openModal(x) {
	if (x == 1) {
		$("#speaker_title").text("Trishneet Arora");
		$("#speaker_name").text("Trishneet Arora");
		$("#speaker_designation").text("Cyber Security Expert");
		$("#speaker_bio").text("Trishneet Arora is an Indian author, cyber security expert, and entrepreneur. Arora has written books on cyber security, ethical hacking and web defence. He is the Founder and CEO of TAC Security an IT Security Company. He is one of the top 10 influential white hat hackers in India.");
		$("#speaker_img").attr("src", "img/speakers/trishneet.jpg");
	} else if(x==2) {
		$("#speaker_title").text("Cindy Rose Mathew");
		$("#speaker_name").text("Cindy Rose Mathew");
		$("#speaker_designation").text("Co-Founder of StoryTime");
		$("#speaker_bio").text("A 23 year old engineering graduate, data analyst at Mu Sigma, co-founder of Storytime, daughter, sister and a friend – who dreams of growing skinny by eating cake and changing the lives of children, one storybook at a time.");
		$("#speaker_img").attr("src", "img/speakers/cindy.jpg");
	} else if(x==3) {
		$("#speaker_title").text("Mohammed Zeeshan");
		$("#speaker_name").text("Mohammed Zeeshan");
		$("#speaker_designation").text("Co-Founder of Climber");
		$("#speaker_bio").text("Zeeshan is a young social entrepreneur who believes that innovative business ideas can solve some of the complex societal problems in Asia. At the age as young as nineteen, Zeeshan co-founded 'The Climber' an Education Startup helping students discover their passions and make informed career choices.");
		$("#speaker_img").attr("src", "img/speakers/zeeshan.jpg");
	}
	$('#speaker').modal('show');
}

class Line {
	constructor(x, y, a) {
		this.x = x;
		this.y = y;
		this.ang = a;
		this.angVel = 0;
		this.angAcc = 0.4;
	}
	anim() {
		ctx.moveTo(this.x, this.y + 1);
		this.x += 6 * Math.cos(this.ang);
		this.y += 6 * Math.sin(this.ang);
		this.angVel += 0.2 * (Math.random() - Math.random());
		this.angVel *= this.angAcc;
		this.ang += this.angVel;
		if (Math.random() > 0.98) {
			if (this.angAcc === 0.4) this.angAcc = 0.98;
			else this.angAcc = 0.4;
		}
		ctx.lineTo(this.x, this.y);
		if (Math.random() > 0.96 && numLines < 20) {
			lines.add(new Line(width / 2, height, -Math.PI / 2));
			numLines++;
		}
		if (this.x < -20 || this.x > width + 20 || this.y > height || this.y < 30) {
			if (numLines > 1) {
				numLines--;
				lines.delete(this);
				ctx.beginPath();
				for (let i = 0; i < 2 * Math.PI; i += 0.314) {
					ctx.moveTo(this.x, this.y);
					ctx.lineTo(this.x + (5 * Math.random() + 12) * Math.cos(i), this.y + (5 * Math.random() + 12) * Math.sin(i));
				}
				ctx.stroke();
			}
		}
	}
}
