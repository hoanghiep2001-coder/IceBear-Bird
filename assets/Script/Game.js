// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    ProgressBar: cc.Node,
    Egg: cc.Node,

    Branch1: cc.Node,
    Branch2: cc.Node,
    Branch3: cc.Node,
    Branch4: cc.Node,
    Branch5: cc.Node,
    Branch6: cc.Node,

    Bird1: cc.Node,
    Bird2: cc.Node,
    Bird3: cc.Node,
    Bird4: cc.Node,
    Bird5: cc.Node,
    Bird6: cc.Node,
    Bird7: cc.Node,
    Bird8: cc.Node,
    Bird9: cc.Node,
    Bird10: cc.Node,
    Bird11: cc.Node,
    Bird12: cc.Node,
  },

  onLoad() {
    this.handleInitGame();
  },

  handleInitGame() {
    this.hanldeStartPositionOfBirds(this.Bird1, -60, 72, 1, -0.08, 0.08, false);
    this.hanldeStartPositionOfBirds(this.Bird2, -85, 72, 1, -0.08, 0.08, true);
    this.hanldeStartPositionOfBirds(this.Bird3, -110, 72, 1, -0.08, 0.08, false);
    this.hanldeStartPositionOfBirds(this.Bird4, -140, 72, 1, -0.08, 0.08, true);
    // this.hanldeStartPositionOfBirds(this.Bird5, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird6, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird7, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird8, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird9, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird10, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird11, -60, 72, 1, -0.08, 0.08);
    // this.hanldeStartPositionOfBirds(this.Bird12, -60, 72, 1, -0.08, 0.08);
  },

  hanldeStartPositionOfBirds(node, posX, posY, duration, rotateX, rotateY, isRotate) {
    this.handleSetPosition(node, posX, posY, duration);
    this.handleSetRotateBird(node, rotateX, rotateY, duration, isRotate);
    this.scheduleOnce(() => {
      this.handleSetAnim(node, "grounding", "idle", false);
    }, 1 );
  },

  handleSetPosition(node, posX, posY, duration) {
    const position = cc.v2(posX, posY);
    const moveAction = cc.moveTo(duration, position);
    node.runAction(moveAction);
  },

  handleSetRotateBird(node, rotateX, rotateY, duration, activeRotate = false) {

    const delayAction = cc.delayTime(duration);
    const sequenceAction = cc.sequence(delayAction, cc.scaleTo(0, rotateX, rotateY));

    if(activeRotate) {
      console.log("check")
      node.runAction(cc.sequence(cc.delayTime(0), cc.scaleTo(0, rotateX, rotateY)));
    } else {
      node.runAction(sequenceAction);
    }
  },

  handleSetAnim(node, groundAnim, idleAnim, loop = false) {
    const skeletonComp = node.getComponent("sp.Skeleton");
    skeletonComp.setAnimation(0, groundAnim, loop);

    this.scheduleOnce(() => {
      skeletonComp.setAnimation(0, idleAnim, true);
    }, 1 );
  }

  // update (dt) {},
});
