exports.init = init;
function init(_args) {
	$._data = [];
	_.each(_args, function(user, i) {
		if (user.isDefaultTemplate) {
			var defaultTemplateItems = {
				template : 'main',
				properties : {
					itemId : user.id,
					data : user,
					accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
				},
				senderPic : {
					image : user.image
				},
				recevierPic : {
					image : user.image
				},
				name : {
					text : user.name
				},
				time : {
					text : user.time
				},
				status : {
					text : user.status
				},
				friends : {
					text : user.msg.length > 50 ? user.msg.substring(0, 49) + "..." : user.msg
				}
			};
			$._data.push(defaultTemplateItems);
		} else {
			var defaultTemplateItems = {
				properties : {
					itemId : user.id,
					data : user,
					accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
				},
				name : {
					text : user.name
				},
				time : {
					text : user.time
				},
				status : {
					text : user.status
				},
				profilePicture : {
					image : user.image
				},
				message : {
					text : user.msg.length > 50 ? user.msg.substring(0, 49) + "..." : user.msg
				}
			};
			$._data.push(defaultTemplateItems);
		}
	});

	$.mainSection.setItems($._data);
	$.multiTemplateList.addEventListener("itemclick", onListItemClickListener);
}

function onListItemClickListener(e) {
	var row = $.multiTemplateList.sections[e.sectionIndex].getItemAt(e.itemIndex);
	if (e.bindId !== "recevierPic" && e.bindId !== "senderPic" && e.bindId !== "profilePicture") {
		Ti.API.info("this will chat screen");
	} else if (e.bindId === "profilePicture" || e.bindId === "senderPic" || e.bindId === "recevierPic") {
		Ti.API.info("this will open user profile");
	}
}
