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
    this.hanldeStartPositionOfBirds(this.Bird1, -60, 72, 1, -0.08, 0.08, );
  },

  hanldeStartPositionOfBirds(node, posX, posY, duration, rotateX, rotateY, animName, loopAnim) {
    this.handleSetPosition(node, posX, posY, duration);
    this.handleSetRotateBird(node, rotateX, rotateY, duration);
    this.handleSetAnim(node, "grounding", "idle", false);
  },

  handleSetPosition(node, posX, posY, duration) {
    const position = cc.v2(posX, posY);
    const moveAction = cc.moveTo(duration, position);
    node.runAction(moveAction);
  },

  handleSetRotateBird(node, rotateX, rotateY, duration) {
    const delayAction = cc.delayTime(duration);
    const sequenceAction = cc.sequence(delayAction, cc.scaleTo(0, rotateX, rotateY));
    node.runAction(sequenceAction);
  },

  handleSetAnim(node, groundAnim, idleAnim, loop = false) {
    const skeletonComp = node.getComponent("sp.Skeleton");
    skeletonComp.setAnimation(0, groundAnim, loop);

    const delayAction = cc.delayTime(1);
    const sequenceAction = cc.sequence(delayAction, skeletonComp.setAnimation(0, idleAnim, loop));
    node.runAction(sequenceAction);
  }

  // update (dt) {},
});
