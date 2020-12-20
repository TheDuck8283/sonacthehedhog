gdjs.Level2Code = {};
gdjs.Level2Code.GDNewObjectObjects1= [];
gdjs.Level2Code.GDNewObjectObjects2= [];
gdjs.Level2Code.GDgroundObjects1= [];
gdjs.Level2Code.GDgroundObjects2= [];
gdjs.Level2Code.GDNewObject2Objects1= [];
gdjs.Level2Code.GDNewObject2Objects2= [];
gdjs.Level2Code.GDNewObject3Objects1= [];
gdjs.Level2Code.GDNewObject3Objects2= [];
gdjs.Level2Code.GDenemyObjects1= [];
gdjs.Level2Code.GDenemyObjects2= [];
gdjs.Level2Code.GDrightObjects1= [];
gdjs.Level2Code.GDrightObjects2= [];
gdjs.Level2Code.GDleftObjects1= [];
gdjs.Level2Code.GDleftObjects2= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};


gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level2Code.GDNewObjectObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level2Code.GDenemyObjects1});gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDNewObjectObjects1[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://roblox.com", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDNewObjectObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Level2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.Level2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObject2Objects1[i].setPosition((( gdjs.Level2Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDNewObjectObjects1[0].getPointX("Particle")),(( gdjs.Level2Code.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDNewObjectObjects1[0].getPointY("Particle")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDNewObjectObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level2Code.GDenemyObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDNewObjectObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level2Code.GDenemyObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDNewObjectObjects1[i].isCollidingWithPoint((( gdjs.Level2Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDenemyObjects1[0].getPointX("Kill")), (( gdjs.Level2Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDenemyObjects1[0].getPointY("Kill"))) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Level2Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level2Code.GDenemyObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDNewObjectObjects1[i].isCollidingWithPoint((( gdjs.Level2Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDenemyObjects1[0].getPointX("Kill2")), (( gdjs.Level2Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDenemyObjects1[0].getPointY("Kill2"))) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDNewObjectObjects1[k] = gdjs.Level2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDNewObjectObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDNewObjectObjects1.length = 0;
gdjs.Level2Code.GDNewObjectObjects2.length = 0;
gdjs.Level2Code.GDgroundObjects1.length = 0;
gdjs.Level2Code.GDgroundObjects2.length = 0;
gdjs.Level2Code.GDNewObject2Objects1.length = 0;
gdjs.Level2Code.GDNewObject2Objects2.length = 0;
gdjs.Level2Code.GDNewObject3Objects1.length = 0;
gdjs.Level2Code.GDNewObject3Objects2.length = 0;
gdjs.Level2Code.GDenemyObjects1.length = 0;
gdjs.Level2Code.GDenemyObjects2.length = 0;
gdjs.Level2Code.GDrightObjects1.length = 0;
gdjs.Level2Code.GDrightObjects2.length = 0;
gdjs.Level2Code.GDleftObjects1.length = 0;
gdjs.Level2Code.GDleftObjects2.length = 0;

gdjs.Level2Code.eventsList0(runtimeScene);
return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
