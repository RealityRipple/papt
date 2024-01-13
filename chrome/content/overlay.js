var papt =
{
 init: function()
 {
  const m = document.getElementById('context-pasteplain');
  if (m)
   m.hidden = true;
  document.getElementById('contentAreaContextMenu').addEventListener('popupshowing', papt.popup, false);
 },
 popup: function()
 {
  const controller = document.commandDispatcher.getControllerForCommand('cmd_pasteNoFormatting');
  const enabled = controller && controller.isCommandEnabled('cmd_pasteNoFormatting');
  const m = document.getElementById('context-pasteplain');
  if (m)
   m.hidden = !enabled;
 }
};
window.addEventListener('load', papt.init, false);
