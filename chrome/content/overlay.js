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
  const m = document.getElementById('context-pasteplain');
  const p = document.getElementById('context-paste');
  if (!m)
   return;
  if (!p)
  {
   m.hidden = true;
   return;
  }
  if (p.hidden)
  {
   m.hidden = true;
   return;
  }
  const controller = document.commandDispatcher.getControllerForCommand('cmd_pasteNoFormatting');
  const enabled = controller && controller.isCommandEnabled('cmd_pasteNoFormatting');
  if (m)
   m.hidden = !enabled;
 }
};
window.addEventListener('load', papt.init, false);
