/* faceplate.js | © Ryan Boylett <boylett.uk> 2015
 * Faceplate.js is a versatile framework that is ideal for Landing Pages and Forms
 */

var Faceplate = new (Faceplate = function()
{
	var $this = this,

		ismobile = function() { var a = (navigator.userAgent||navigator.vendor||window.opera); return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)) },
		ishighdensity = function() { return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1)) },
		isretina = function() { return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent) },
		daysindate = function(month, year) { return (new Date(parseInt(year), parseInt(month), 0).getDate()); },
		ordinalsuffix = function(i) { var j=i%10,k=i%100;return i+((j==1&&k!=11)?'st':((j==2&&k!=12)?'nd':((j==3&&k!=13)?'rd':'th'))) };

	$this.Device = ismobile() ? 'mobile' : 'desktop';
	$this.Density = isretina() ? 'retina' : (ishighdensity() ? 'hd' : 'normal');

	$this.Validate = function(target)
	{
		var $target = $(target),
			validator = function()
			{
				var rule = $(this).attr('valid'),
					val = $(this).is('input, select, textarea') ? this.value : this.innerHTML;

				switch(rule.toLowerCase())
				{
					case 'checked': return this.checked ? true : false;
					case 'dob day': return (parseInt(val) > 0 && parseInt(val) <= daysindate($('*[valid="dob month"]')[0].value, $('*[valid="dob year"]')[0].value)) ? true : false;
					case 'dob month': return (parseInt(val) > 0 && parseInt(val) <= 12) ? true : false;
					case 'dob year': return (parseInt(val) > 1900 && parseInt(val) < new Date().getFullYear()) ? true : false;
					case 'email': return val.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) ? true : false;
					case 'mobile': return val.trim().match(/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/) ? true : false;
					case 'number': return val.trim().match(/^-?([0-9]+)(\.([0-9]+))?$/) ? true : false;
					case 'telephone': return val.trim().match(/^\+?(44)?((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/) ? true : false;
					case 'text': case 'selected': return val.trim() ? true : false;
				}

				if(rule[0] == '=')
				{
					var casesensitive = !!rule.match(/^=\(i\)(.*)$/i);
						rule = rule.substr(casesensitive ? 4 : 1).trim();
					return (casesensitive ? (val.toLowerCase() == $('*[name="' + rule + '"]')[0].value.toLowerCase()) : (val == $('*[name="' + rule + '"]')[0].value)) ? true : false;
				}

				else if(rule[0] == '!' && rule[1] == '=')
				{
					var casesensitive = !!rule.match(/^\!=\(i\)(.*)$/i);
						rule = rule.substr(casesensitive ? 5 : 2).trim();
					return (casesensitive ? (val.toLowerCase() != $('*[name="' + rule + '"]')[0].value.toLowerCase()) : (val != $('*[name="' + rule + '"]')[0].value)) ? true : false;
				}
			};

		($target.is('*[valid]') ? $target : $target.find('*[valid]')).each(function()
		{
			var valid = validator.call(this),
				input = $(this),
				parent = input[valid ? 'removeClass' : 'addClass']('has-error').parent();

			if(parent.is('label'))
				parent[valid ? 'removeClass' : 'addClass']('has-error');

			input.closest('.step')[(input.closest('.step').find('.has-error').length > 0) ? 'addClass' : 'removeClass']('has-errors');
		});

		return $this;
	};

	$this.Form = function(form)
	{
		var $form = $(form),
			$steps = $form.find('.step').hide(),
			$currentstep = $steps.first().show();

		$form.find('*[valid]').on('change blur', function()
		{
			$this.Validate(this);
		});

		$form.find('label > input[type="checkbox"]').on('change', function(){ $(this).parent()[this.checked ? 'addClass' : 'removeClass']('active') });

		$form.find('label > input[type="radio"]').on('change', function()
		{
			var box = $(this),
				name = box.attr('name');

			if(name)
				$('input[type="radio"][name="' + name + '"]').not(box).each(function()
				{
					$(this).parent().removeClass('active');
				});

			box.parent().addClass('active');
		});

		$form.find('*[valid="dob month"], *[valid="dob year"]').on('change', function()
		{
			var days = daysindate($form.find('*[valid="dob month"]')[0].value, $form.find('*[valid="dob year"]')[0].value),
				sel = $form.find('select[valid="dob day"]'),
				inp = $form.find('*[valid="dob day"]:not(select)'),
				curr = parseInt(sel.length > 0 ? sel[0].value : inp[0].value);

			if(inp.length > 0 && curr <= days)
				inp.val(curr).trigger('change');

			if(sel.length > 0)
			{
				sel.find('option').remove();
				for(var i = 0; i < days; i ++)
					$('<option' + (String(i + 1) == String(curr) ? ' selected="selected"' : '') + ' value="' + (i + 1) + '">' + ordinalsuffix(i + 1) + '</option>').appendTo(sel);

				sel.trigger('change');
			}
		});

		$form.find('.continue').on('click', function()
		{
			$this.Validate($currentstep);

			if(!$currentstep.hasClass('has-error'))
				$currentstep = $currentstep.hide().trigger('hide')
					.next('.step').show().trigger('show');

			else
				$currentstep.addClass('has-errors').find('.has-error[valid]').first().focus();

			return !1;
		});

		$form.on('submit', function()
		{
			$form.find('.step').each(function()
			{
				$this.Validate($currentstep);

				if($currentstep.find('.has-error').length == 0)
					$currentstep.removeClass('has-errors');

				else
					$currentstep.addClass('has-errors');
			});

			if($form.find('.has-errors').length > 0)
			{
				$form.find('.step').hide();
				$form.find('.step.has-errors').first().show().find('.has-error[valid]').first().focus();

				return !1;
			}

			$form.trigger('beforesubmit');
		});

		return $this;
	};

	$this.Fancify = function(input)
	{
		input = $(input);

		if(input.is('select'))
		{
			var select = $(input).hide(),
				mask = $('<div class="select"></div>').insertAfter(select),
				label = $('<font></font>').appendTo(mask),
				list = $('<ul></ul>').appendTo(mask);

			mask.addClass(select.attr('class'));
			select.removeClass(select.attr('class'));

			select.on('change', function(e, selectedOption)
			{
				if(select.find('option').length != list.find('li').length)
				{
					list.html('');

					select.find('option').each(function()
					{
						var li = $('<li>').appendTo(list)
							.data('value', $(this).attr('value') ? $(this).attr('value') : $(this).html())
							.data('option', $(this))
							.addClass($(this).is('[selected]') ? 'selected' : '')
							.html($(this).html());

						$(this).data('li', li);
					});

					label.html(select.find('option[selected]').length > 0 ? select.find('option[selected]').html() :
						(select.find('option[value="' + select[0].value + '"]').length > 0 ? select.find('option[value="' + select[0].value + '"]').html() :
						(select.find('option').first().html())));
				}

				else
				{
					list.find('li.selected').removeClass('selected');

					if(!selectedOption)
					{
						selectedOption = select.find('option').filter(function()
						{
							return (($(this).attr('value') ? $(this).attr('value') : $(this).html()) == select[0].value);
						});

						if(!selectedOption)
						{
							selectedOption = select.find('option').first();
						}
					}

					var li = $(selectedOption)
						.data('li')
						.addClass('selected');

					select[0].value = li.data('value');
					label.html(li.html());
				}
			}).trigger('change');

			mask.on('click', function()
			{
				return $('.select.active').not(mask).removeClass('active'),
					mask.toggleClass('active'),
					!1;
			});

			list.on('click', 'li', function(e)
			{
				return select.val($(this).data('value')).trigger('change', [$(this).data('option')]),
					mask.removeClass('active'),
					!1;
			});

			$(document).on('click', function()
			{
				mask.removeClass('active');
			})
		}

		return $this;
	};

	return $this;
});
