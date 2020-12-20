gdjs.Level1Code = {};
gdjs.Level1Code.GDNewObjectObjects1= [];
gdjs.Level1Code.GDNewObjectObjects2= [];
gdjs.Level1Code.GDgroundObjects1= [];
gdjs.Level1Code.GDgroundObjects2= [];
gdjs.Level1Code.GDNewObject2Objects1= [];
gdjs.Level1Code.GDNewObject2Objects2= [];
gdjs.Level1Code.GDNewObject3Objects1= [];
gdjs.Level1Code.GDNewObject3Objects2= [];
gdjs.Level1Code.GDenemyObjects1= [];
gdjs.Level1Code.GDenemyObjects2= [];
gdjs.Level1Code.GDrightObjects1= [];
gdjs.Level1Code.GDrightObjects2= [];
gdjs.Level1Code.GDleftObjects1= [];
gdjs.Level1Code.GDleftObjects2= [];
gdjs.Level1Code.GDNewObject4Objects1= [];
gdjs.Level1Code.GDNewObject4Objects2= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level1Code.GDNewObjectObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level1Code.GDenemyObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level1Code.GDNewObjectObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level1Code.GDenemyObjects1});gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://roblox.com", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNewObjectObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Level1Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObject2Objects1[i].setPosition((( gdjs.Level1Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDNewObjectObjects1[0].getPointX("Particle")),(( gdjs.Level1Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDNewObjectObjects1[0].getPointY("Particle")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].returnVariable(gdjs.Level1Code.GDNewObjectObjects1[i].getVariables().getFromIndex(0)).setString("true");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].returnVariable(gdjs.Level1Code.GDNewObjectObjects1[i].getVariables().getFromIndex(0)).setString("false");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level1Code.GDenemyObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNewObjectObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getVariableString(gdjs.Level1Code.GDNewObjectObjects1[i].getVariables().getFromIndex(0)) == "true" ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level1Code.GDenemyObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNewObjectObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNewObjectObjects1[i].getVariableString(gdjs.Level1Code.GDNewObjectObjects1[i].getVariables().getFromIndex(0)) == "false" ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDNewObjectObjects1[k] = gdjs.Level1Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNewObjectObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level1Code.GDNewObjectObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level1Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDNewObjectObjects1[0].getPointX("")), "", 0);
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDNewObjectObjects1.length = 0;
gdjs.Level1Code.GDNewObjectObjects2.length = 0;
gdjs.Level1Code.GDgroundObjects1.length = 0;
gdjs.Level1Code.GDgroundObjects2.length = 0;
gdjs.Level1Code.GDNewObject2Objects1.length = 0;
gdjs.Level1Code.GDNewObject2Objects2.length = 0;
gdjs.Level1Code.GDNewObject3Objects1.length = 0;
gdjs.Level1Code.GDNewObject3Objects2.length = 0;
gdjs.Level1Code.GDenemyObjects1.length = 0;
gdjs.Level1Code.GDenemyObjects2.length = 0;
gdjs.Level1Code.GDrightObjects1.length = 0;
gdjs.Level1Code.GDrightObjects2.length = 0;
gdjs.Level1Code.GDleftObjects1.length = 0;
gdjs.Level1Code.GDleftObjects2.length = 0;
gdjs.Level1Code.GDNewObject4Objects1.length = 0;
gdjs.Level1Code.GDNewObject4Objects2.length = 0;

gdjs.Level1Code.eventsList0(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
